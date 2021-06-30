import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h3>Nav</h3>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/about">About Us</Link>
            </button>
            <button>
                <Link to="/contact">Contact Us</Link>
            </button>
            <button>
                <Link to="/product/bmw">BMW</Link>
            </button>
            <button>
                <Link to="/product/audi">Audi</Link>
            </button>
            <button>
                <Link to="/clock">Clock</Link>
            </button>
            <button>
                <Link to="/helloworld">Hello World</Link>
            </button>
            <button>
                <Link to="/bar">Bar</Link>
            </button>
        </div>
    )
}

export default Nav
