function NavBar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item px-2">
                    <a class="btn btn-primary" href="#" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-joystick" viewBox="0 0 16 16">
                            <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"></path>
                            <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"></path>
                        </svg>
                        retronome
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item" href="#">Games</a></li>
                            <li><a class="dropdown-item" href="#">Consoles</a></li>
                            <li><a class="dropdown-item" href="#">Misc</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item px-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Searchbar" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <button class="nav-item btn btn-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        Log In
                    </button>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;