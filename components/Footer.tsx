export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center w-full py-4 mx-auto font-display">
            <div className="flex flex-col items-center w-full p-4 ">
                <p className="text-sm text-gray-600">&copy; {year} Frans Filasta Pratama.</p>
                <p className="text-sm text-gray-600"> All Rights Reserved.</p>
            </div>
        </footer>
    )
}