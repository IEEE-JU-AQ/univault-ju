export default function Footer() {
    return (
        <footer className="border-t border-border bg-white py-8 px-8 mt-20">
            <div className="ml-75 flex flex-col md:flex-row justify-between items-center">

                {/* Left: Branding */}
                <div className="space-y-1 md:text-left">
                    <h3 className="text-lg font-bold tracking-wider">UNIVAULT</h3>
                    <p className="text-xs">Open-source resource archive for JU Aqaba.</p>
                </div>

                {/* Center: Attribution */}
                <div className="text-sm">
                    Built with <span className="text-accent">♥</span> at JOSA OpenLab & IEEE JU Aqaba
                </div>

                {/* Right: Socials */}
                <div className="flex gap-4">
                    <a href="https://github.com/IEEE-JU-AQ/univault-ju" className="text-indigo-800 hover:text-indigo-500 transition-colors"><i className="fa-brands fa-github text-4xl"></i></a>
                </div>

            </div>
        </footer>
    );
}