import conf from "../Config";

function Footer(){
    return (
        <div className="footer">
            <p>Made with ❤️ by Kavya Lokuge</p>
            <p>{new Date().getFullYear()} © {conf.SITE_NAME} ☄️</p>
        </div>
    )
}

export default Footer;