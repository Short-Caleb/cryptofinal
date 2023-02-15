import './Layout.css';

const Layout = (props) => {
    return (
        <div class='layout'>
            {props.children}
        </div>
    );
}

export default Layout;