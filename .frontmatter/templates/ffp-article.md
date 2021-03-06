---
slug: laravel-app-sso-using-wso2-identity-server-saml2
title: Laravel App SSO using WSO2 Identity Server - SAML2
date: 2022-01-09
author: fransfp
description: This article will help you to secure your Laravel app with SSO using WSO2
  Identity Server - SAML2.
tags:
  - laravel
  - sso
  - wso2
  - idenity server
keywords:
  - laravel
  - SSO
  - SAML
---

# Introduction

## Laravel

Laravel is no doubt is the most popular PHP framework. Laravel is highly expressive with security feature included. It is also highly flexible and evolves with lates web development trends.

It will take only few minutes to booting up a simple web app including its authentication mechanism (you can use Laravel Breeze, Jetstream, or Fortify) just using Laravel Artisan Command and Eloquent ORM.

## SSO SAML2

SAML2 (Security Assertion Markup Language 2.0) is a version of the SAML standard for exchanging authentication and authorization identities between security domain (app). SAML2 uses security tokens containing assertions and user information in XML-based document. SAML2 enabling web-based, cross-domain SSO, which helps to reduce administrative overhead to user, by reducing credential information input in each security domain.

## Identity Server

The Identity Server is a server that manages securely identities such as employees, suppliers, partners, customers, etc. (any type of information that can be stored in a database as an entity has an identity); and access between systems and applications, with the possibility of using a single access and without the need to repeat credentials every time a user needs to use a Service Provider.

WSO2 Identity Server is one of IAM product with API-driven, open-source, cloud-native feature. It is so easy to implement SSO authentication using WSO2 IS.

![source : wso2.com](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa4276f6-dff8-42ac-89e8-675537b56505%2FUntitled.png?table=block&id=356f6c9a-0470-424a-afd4-ed2cf111681a&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

source :??[wso2.com](http://wso2.com/)

# Terms Glossary

In order to understand this tutorial, i think it???s necessary for you to familiarize with some basic concepts, as explained below:

idP = Identity Provider is a system thant is able to identify the user and issue the signed SAML document

SP = Service Provider is a system that receives SAML XML. It???s can be your app.

Metadata = an XML document that contains information about the idP dan SP. idP issues XML metadata when a SP registers the app.

SSO = Single Sign On: an authentication process that enables users to use unique credentials across various applications within an organization.

I separated this article into three parts. Part 1 will cover laravel setup. Part 2 will cover wso2 identity server setup. Part 3 will connecting part 1 and part 2 to finalize the app login.

# Part 1 : Laravel Setup

1. Create new Laravel App (you can skip this if you had your project setup-ed)

   ```shell
   composer create-project laravel/laravel laravel-wso2is
   ```

2. Install laravel-saml2 library. You can read the documentation [here.]??(https://github.com/aacotroneo/laravel-saml2)

   ```shell
   composer require aacotroneo/laravel-saml2
   ```

3. Publish laravel-saml2 config file. This will add the files??
   `app/config/saml2_settings.php`&??
   `app/config/saml2/mytestidp1_idp_settings.php`
   , which you will need to customize.

   ```shell
   php artisan vendor:publish --provider="Aacotroneo\Saml2\Saml2ServiceProvider"
   ```

4. Define names of all the IDPs you want to configure in??`app/config/saml2_settings.php`??. The name of the IDP will show up in the URL used by the Saml2 routes the library makes, as well as internally in the filename for each IDP's config.

   ```php
   'idpNames' => ['wso2is'],
   ```

5. Set??`$this_idp_env_id = 'WSO2IS'`??or any value, then you can set ENV vars starting with??`SAML2_WSO2IS_`????respectively.

   ```php
   SAML2_WSO2IS_IDP_ENTITYID=localhost
   SAML2_WSO2IS_IDP_HOST=https://localhost:9443/samlsso
   SAML2_WSO2IS_IDP_SSO_URL=https://localhost:9443/samlsso
   SAML2_WSO2IS_IDP_SL_URL=https://localhost:9443/samlsso
   SAML2_WSO2IS_IDP_x509=file:///var/www/resources/sso/wso2carbon.pem
   SAML2_WSO2IS_SP_ENTITYID=playground
   WSO2IS_USERSTORENAME=PRIMARY
   ```

6. In order to make single logout work properly, I need to extend Saml2Controller which provided by the library.

   ```php
   <?php

   namespace App\Http\Controllers;

   use Aacotroneo\Saml2\Saml2Auth;
   use Illuminate\Contracts\Auth\StatefulGuard;
   use Illuminate\Http\Request;

   class Wso2Saml2Controller extends Controller
   {
       /**
        * The guard implementation.
        *
        * @var \Illuminate\Contracts\Auth\StatefulGuard
        */
       protected $guard;

       /**
        * Create a new controller instance.
        *
        * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
        * @return void
        */
       public function __construct(StatefulGuard $guard)
       {
           $this->guard = $guard;
       }

       public function logout(Saml2Auth $saml2Auth, Request $request)
       {
           $request->session()->invalidate();
           $request->session()->regenerateToken();

           parent::logout($saml2Auth, $request);
       }
   }
   ```

### ??????????Laravel Fortify vs Manual Authentication

Laravel offers two different authentication mechanism. Using Laravel Fortify your life will be easier. Laravel Fortify is a frontend agnostic authentication backend implementation for Laravel. Fortify registers the routes and controllers needed to implement all of Laravel's authentication features, including login, registration, password reset, email verification, and more. Nonetheless, wether Fortify or manual authentication, it will not be that much different.

1. (Optional) Install Laravel Jetstream. I use this starter pack for this article purpose (because i love this starter pack ????)

   ```shellsession
   composer require laravel/jetstream
   ```

   After installing the Jetstream package, you may execute the??`jetstream:install`??Artisan command. This command accepts the name of the stack you prefer (`livewire`??or??`inertia`). I prefer livewire.

   ```shellsession
   php artisan jetstream:install livewire --teams
   ```

   Then finalizing the installation

   ```shell
   npm install
   npm run dev
   php artisan migrate
   php artisan vendor:publish --tag=jetstream-views
   ```

2. Now we???re done setup Laravel Jetstream with Livewire.

![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1082462b-4486-4d05-8005-b7537d1ef88d%2FUntitled.png?table=block&id=1f675320-dc77-422f-843d-d475af98af3c&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)
![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe202fd09-4f6c-409b-964a-16941fe845e0%2FUntitled.png?table=block&id=5e198fa1-ebd0-467a-90d0-240d7acb6496&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

# Part 2: WSO2 Identity Server Setup

Make sure you have JDK 8 or 11 installed in your server. If you have it installed you can continue to install WSO2 Identity server. Download the installer at

[Identity Server - On-Premise and in the Cloud](https://wso2.com/identity-server/)

1. Start the WSO2 Identity Server and go to??[https://localhost:9443/carbon](https://localhost:9443/carbon)??to access management console.

```shell
./wso2server.sh start
```

2. Create new Service Provider

![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F21969531-f73c-4a2d-a9ee-66fbcfa46b56%2FUntitled.png?table=block&id=942a0d2b-bbe1-4e0a-ab42-06210fb8ebbd&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

Click register to add new service provider. The service provider screen will appear.

![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6964cc7a-2a9c-47cc-ae0a-e7584e719ad5%2FUntitled.png?table=block&id=2f2cd0ae-0086-4854-9ee7-a812814c6a5d&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

We need to upload certificate. Follow the steps bellow.

- Go to the folder within the WSO2 Identity Server version??*/repository/resources/security*
- Open a terminal and execute the following commands to export the keystone certificate.
- The exported certificate will be in binary format.

```shell
keytool -export -keystore wso2carbon.jks -alias wso2carbon -file wso2carbon.crt
```

Convert the previous binary encrypted certificate to a PEM encrypted certificate.

```shell
openssl x509 -inform der -in wso2carbon.crt -out wso2carbon.pem
```

- Upload pem file to service provider.

![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F657ffbbe-18d8-4240-95ad-5907c66abcc9%2FUntitled.png?table=block&id=162186dc-5d9e-4039-8f78-ef8800c0f8ca&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

- Claim configuration : wso2 local claim will be used. Givenname and emailaddress need to be added.

![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc65a21bf-b3c1-4561-913c-d5f2227fa651%2FUntitled.png?table=block&id=3025bcf3-bf7b-404b-89dc-cb8cbf4b4f0b&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

- Inbound Authentication Configuration: the responsibility of the inbound authenticator component is to identify and analyze all inbound authentication requests and then generate the corresponding response.

  To configure Inbound Authentication, on SAML2 Web SSO Section click on the Configure button, which will redirect you to the form that will request the information necessary to establish the connection between WSO2 Identity Server and the application that has been previously generated.

  Complete the form with the following information:

  [Untitled](https://www.notion.so/c689819fcefc44d1a68f4968675ae6fb)

  Then, click on the Update button to update the information in the Service Provider.

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e628763-8293-4a0e-afd6-06a27aa13b0b%2FUntitled.png?table=block&id=2d50eaaf-0063-428b-b02c-8a687cfc0471&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F027db414-c927-42ff-ad4c-8d966b24fc4c%2FUntitled.png?table=block&id=38f50fa1-c54b-4a6e-9311-913ddffb6d79&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  # Part 3: Connecting WSO2 User to Laravel User

  First, create new user in WSO2 Management Console. To create new user in WSO2 ,the following steps must be followed:

  - Click on Add, under Users and Roles.
  - Click on Add New User, on the page where the console was redirected.
  - You will be asked to fill out a form which contains basic user information, such as Username and Password

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7154c21a-ac7c-4279-8c48-33470d8dc680%2FUntitled.png?table=block&id=03bf9224-e97b-453a-a11a-4e32c24d557d&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  - Click finish.

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F989226c4-2620-4ac5-839f-a13dce69c2c3%2FUntitled.png?table=block&id=ff8d2e1a-d456-4b3a-b035-ab99c0490ed8&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=1800&userId=&cache=v2)

  - Fill some field in User Profile

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf28b304-c5b4-4c19-81c3-15654ae1547f%2FUntitled.png?table=block&id=e66836a3-3eb5-43ec-9ec9-75d3596ed0c5&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  - Create Event Listener to catch ???logged in??? event from WSO2 IS. Add this code to app\Providers\EventServiceProvider.php

  ```php
  <?php

  namespace App\Providers;

  use Aacotroneo\Saml2\Events\Saml2LoginEvent;
  use Aacotroneo\Saml2\Events\Saml2LogoutEvent;
  use Illuminate\Auth\Events\Registered;
  use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
  use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\Facades\Session;

  class EventServiceProvider extends ServiceProvider
  {
      /**
       * The event listener mappings for the application.
       *
       * @var array<class-string, array<int, class-string>>
       */
      protected $listen = [
          Registered::class => [
              SendEmailVerificationNotification::class,
          ],
      ];

      /**
       * Register any events for your application.
       *
       * @return void
       */
      public function boot()
      {
          Event::listen("Aacotroneo\Saml2\Events\Saml2LoginEvent", function (
              Saml2LoginEvent $event
          ) {
              $user = $event->getSaml2User();
              $synchronizer = new SyncUserFromWSO2();

              $laravelUser = $synchronizer->sync($user);
              Auth::login($laravelUser);
          });

          Event::listen("Aacotroneo\Saml2\Events\Saml2LogoutEvent", function (
              Saml2LogoutEvent $event
          ) {
              Auth::logout();
              Session::save();
          });
      }
  }
  ```

  - Create an action class to ???synchronize??? laravel user with WSO2 IS user. Create class in??**app/actions**??folder.

  ```php
  <?php

  namespace App\Actions;

  use Aacotroneo\Saml2\Saml2User;
  use App\Actions\WSO2ISClaims;
  use App\Models\User;
  use Illuminate\Contracts\Container\BindingResolutionException;
  use Illuminate\Support\Facades\Hash;

  /**
   *
   * @package App\Actions
   */
  class SyncUserFromWSO2
  {

      private $DEFAULT_PASSWORD = 'wso2is';

      public function sync(Saml2User $saml2User): User
      {

          if (!$this->isExistingUser($saml2User->getAttribute(WSO2ISClaims::$EMAIL_ADDRESS)[0])) {
              return $this->create($saml2User);
          }

          return $this->updateUser($saml2User);
      }


      /**
       * Check if user already exists
       *
       *
       * @param string $email
       * @return bool
       */
      public function isExistingUser(string $email)
      {
          $laravelUser = User::where(
              "email",
              $email
          )->first();

          return $laravelUser != null;
      }


      /**
       *
       * @param Saml2User $saml2User
       * @return mixed
       * @throws BindingResolutionException
       */
      public function create(Saml2User $saml2User)
      {

          $laravelUser = User::create([
              "name" =>
              $saml2User->getAttribute(WSO2ISClaims::$GIVEN_NAME)[0],
              "username" => $saml2User->getAttribute(
                  WSO2ISClaims::$USERNAME
              )[0],
              "email" => $saml2User->getAttribute(
                  WSO2ISClaims::$EMAIL_ADDRESS
              )[0],
              'email_verified_at' => now(),
              "password" => Hash::make($this->DEFAULT_PASSWORD),
          ]);



          return $laravelUser;
      }


      public function updateUser(Saml2User $saml2User)
      {
          $laravelUser = User::where(
              "email",
              $saml2User->getAttribute(
                  WSO2ISClaims::$EMAIL_ADDRESS
              )[0]
          )->first();

          $laravelUser->name = $saml2User->getAttribute(WSO2ISClaims::$GIVEN_NAME)[0];
          $laravelUser->username = $saml2User->getAttribute(WSO2ISClaims::$USERNAME)[0];
          $laravelUser->email = $saml2User->getAttribute(WSO2ISClaims::$EMAIL_ADDRESS)[0];
          $laravelUser->password = Hash::make($this->DEFAULT_PASSWORD);

          $laravelUser->save();

          return $laravelUser;
      }
  }
  ```

  ```php
  <?php

  namespace App\Actions;

  final class WSO2ISClaims
  {
      /**
       * Username claim
       * @var string
       */
      public static string $USERNAME = "http://wso2.org/claims/username";

      /**
       * Role claim
       *
       * @var string
       */
      public static string $ROLE = "http://wso2.org/claims/role";

      /**
       *
       *
       *
       * @var string
       */
      public static string $DEPARTMENT = "http://wso2.org/claims/department";

      /**
       * Email Address
       *
       * @var string
       */
      public static string $EMAIL_ADDRESS = "http://wso2.org/claims/emailaddress";

      /**
       *
       * Lastname
       *
       * @var string
       */
      public static string $LAST_NAME = "http://wso2.org/claims/lastname";

      /**
       * Fullname
       *
       * @var string
       */
      public static string $GIVEN_NAME = "http://wso2.org/claims/givenname";


      /**
       *
       * @var string
       */
      public static string $USER_PRINCIPAL = "http://wso2.org/claims/userprincipal";


      /**
       *
       * @var string
       */
      public static string $IS_READONLY_USER = "http://wso2.org/claims/identity/isReadOnlyUser";


      /**
       *
       * @var string
       */
      public static string $MODIFIED = "http://wso2.org/claims/modified";


      /**
       *
       * @var string
       */
      public static string $FULL_NAME = "http://wso2.org/claims/fullname";


      /**
       *
       * @var string
       */
      public static string $CREATED = "http://wso2.org/claims/created";


      /**
       *
       * @var string
       */
      public static string $RESOURCE_TYPE = "http://wso2.org/claims/resourceType";


      /**
       *
       * @var string
       */
      public static string $USERID = "http://wso2.org/claims/userid";
  }
  ```

  These classes will synchronize laravel user data with WSO2 IS user data every time user logged in to laravel application.

  At this state, your laravel application should connected to WSO2 IS. BUT, we need some additional configuration to make laravel save authenticated session correctly by using ???laravel way???. Edit saml2_config.php file and define ???routesMiddleware???.

  ```php
  <?php

  "routesMiddleware" => ["saml"],
  ```

  - Then create new middleware entry at app\Http\Kernel.php

  ```php
  <?php

  protected $middlewareGroups = [
  	...
  	"saml" => [
              \App\Http\Middleware\EncryptCookies::class,
              \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
              \Illuminate\Session\Middleware\StartSession::class,
          ],
  ];
  ```

  Now this Laravel Application will generate session for authenticated user correctly. BUT We are not done yet. Many time your user maybe authenticated on other service provider in your organization. In this case laravel should ask WSO2 IS first wether the users is authenticated or not. If authenticated then we should bypass them.

  - Create new middleware by using this command :

  ```shell
  php artisan make:middleware Saml2Authenticate
  ```

  - Open the file and add code bellow :

  ```php
  <?php

  namespace App\Http\Middleware;

  use Aacotroneo\Saml2\Saml2Auth;
  use Closure;
  use Illuminate\Auth\Middleware\Authenticate;

  /**
   * @package App\Http\Middleware
   */
  class Saml2Authenticate extends Authenticate
  {

      protected function authenticate($request, array $guards)
      {
          $saml2Auth = new Saml2Auth(Saml2Auth::loadOneLoginAuthFromIpdConfig('wso2is'));
          $login = $saml2Auth->login();
      }

      public function handle($request, Closure $next, ...$guards)
      {

          if (empty($guards)) {
              $guards = [null];
          }

          foreach ($guards as $guard) {
              if ($this->auth->guard($guard)->check()) {
                  return $next($request);
              }
          }

          $this->authenticate($request, $guards);
      }

      protected function redirectTo($request)
      {
          if (!$request->expectsJson()) {
              return route("login");
          }
      }
  }
  ```

  - Then register this new middleware to app\Http\Kernel.php

  ```php
  <?php

  ...

  protected $routeMiddleware = [
  	...
  	'saml2auth' => \App\Http\Middleware\Saml2Authenticate::class,
  ];
  ```

  - Apply the middleware to your routes/web.php.

  ```php
  <?php

  ...

  Route::middleware(['saml2auth', 'verified'])->get('/dashboard', function () {
      return view('dashboard');
  })->name('dashboard');
  ```

  Next, modify your login page. It should be just a landing page which as a button or link to redirect your app authentication to WSO2 IS login page. In this article i made it just like this :

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd974b0c-fb1e-47b7-af41-6682220e1922%2FUntitled.png?table=block&id=5f14d764-73ca-478c-a7f6-1fad4f95a26d&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  ```php
  <x-guest-layout>
      <x-jet-authentication-card>
          <x-slot name="logo">
              <x-jet-authentication-card-logo />
          </x-slot>

          <x-jet-validation-errors class="mb-4" />

          <div class="mb-4 text-sm font-medium text-green-600">
              Hello!
          </div>

          <div class="flex flex-col mt-8">
              <a href="{{ route('saml2_login', ['wso2is']) }}"
                  class="px-4 py-2 text-sm font-semibold text-center text-white bg-blue-500 rounded hover:bg-blue-700">
                  Login with WSO2IS
              </a>
          </div>

      </x-jet-authentication-card>
  </x-guest-layout>
  ```

  Focus at route(???saml2_login???,\[???wso2is???]). This route name is defined by laravel-saml library. Use this route with your defined ???idpNames??? in saml2_settings.php file. You must use route saml2_logout too to logout the app.

  ## Results and Conclusions

  As you walk along this tutorial, using laravel (jetstream) you can establish a connection using the SAML2 to WSO2 IS. It???s very simple and fast in development.

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F41a4ea89-2d37-4a3f-94e4-1d8e86d2998d%2FUntitled.png?table=block&id=d414d4bf-cb8f-4182-b28e-516f73f099d4&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  ![Untitled](https://how-to-bphn.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd2204276-1687-4b9e-9699-6472eaf7fe99%2FUntitled.png?table=block&id=08caeda2-da00-42e7-94e5-cc68fc5de541&spaceId=d49281f5-4a5a-421a-832f-7bfb00172ba3&width=2000&userId=&cache=v2)

  Clone bellow repository to see complete source code of this tutorial.

  [https://github.com/fransfilastap/laravel-wso2is](https://github.com/fransfilastap/laravel-wso2is)
