export default function Footer() {
    return (
        <footer className="border-t border-border py-8 px-4 sm:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center md:ml-70">

                {/* Left: Branding */}
                <div className="space-y-1 text-center md:text-left">
                    <h3 className="text-lg font-bold tracking-wider">UNIVAULT</h3>
                    <p className="text-xs">Open-source resource archive for JU Aqaba.</p>
                </div>

                {/* Center: Attribution */}
                <div className="text-sm text-center md:text-center">
                    Built with <span className="text-accent">♥</span> at JOSA OpenLab & IEEE JU Aqaba
                </div>

                {/* Right: Socials */}
                <div className="flex justify-center md:justify-end gap-4">
                    <a href="https://github.com/IEEE-JU-AQ/univault-ju" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"><i className="fa-brands fa-github text-4xl"></i></a>
                </div>

            </div>
        </footer>
    );
}