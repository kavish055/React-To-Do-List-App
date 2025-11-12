function Header() {
    return (
        <header className="header-bar">
            <div className="header-content">
                <img src="/logo.svg" alt="App logo" className="logo-img" width="36" height="36" />
                <h1 className="header-title">ToDo List</h1>
            </div>
            <hr className="header-divider" />
        </header>
    );
}

export default Header;
