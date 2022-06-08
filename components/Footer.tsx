export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex justify-center items-center py-4 container mx-auto">
            <div className="border-t dark:border-gray-800 mt-5 p-4 w-full flex flex-col items-center">
                <p className="text-gray-500 text-sm">&copy; {year} Frans Filasta Pratama. All Rights Reserved.</p>
            </div>
        </footer>
    )
}