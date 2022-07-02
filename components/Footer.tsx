export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center w-full py-4 mx-auto font-display">
            <div className="flex flex-col items-center w-full px-8 py-4">
                <p className="text-[0.7em] text-black">&copy; {year} Frans Filasta Pratama.</p>
                <p className="text-[0.7em] text-black"> All Rights Reserved.</p>
            </div>
        </footer>
    )
}