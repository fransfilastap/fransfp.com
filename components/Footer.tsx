export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="container flex items-center justify-center py-4 mx-auto">
            <div className="flex flex-col items-center w-full p-4 mt-5 border-t dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-800">&copy; {year} Frans Filasta Pratama. All Rights Reserved.</p>
            </div>
        </footer>
    )
}