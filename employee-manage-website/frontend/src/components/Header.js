import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className='container'>
                    <div>
                        <Link to={'/employees'} href="#" className="navbar-brand">Employee Management App</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header