export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center w-full py-4 mx-auto bg-black font-display">
            <div className="flex flex-col items-center w-full p-4 ">
                <p className="text-sm text-white">&copy; {year} Frans Filasta Pratama.</p>
                <p className="text-sm text-white"> All Rights Reserved.</p>
            </div>
        </footer>
    )
}