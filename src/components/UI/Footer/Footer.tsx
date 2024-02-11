import cl from './Footer.module.scss'
import {Layout} from "antd";
import footerText from './footerText'
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <Layout.Footer className={cl.Footer}>
            <div className={cl.FooterContainer}>
                <div className={cl.FooterColumn}>
                    <h3>
                        {footerText.title}
                    </h3>
                    <span className={cl.ColumnItem}>
                        {footerText.about}
                    </span>
                    <div className={`${cl.ColumnItem} ${cl.Social}`}>
                        <a href='https://vk.com/ivansenpai'>
                            <img className={cl.SocialLink} src={'/footer/vk.svg'} alt='vk'/>
                        </a>
                        <a href='https://www.youtube.com/@ivansenpaii'>
                            <img className={cl.SocialLink} src={'/footer/yt.svg'} alt='yt'/>
                        </a>
                        <a href='https://t.me/ivansenpaii'>
                            <img className={cl.SocialLink} src={'/footer/tg.svg'} alt='tg'/>
                        </a>
                    </div>
                </div>

                <div className={cl.FooterColumn}>
                    <h3>{footerText.info}</h3>
                    <Link className={`${cl.ColumnItem} ${cl.SocialLink}`} to={'/1'}>
                        Бим
                    </Link>
                    <Link className={`${cl.ColumnItem} ${cl.SocialLink}`} to={'/2'}>
                        Бэм
                    </Link>
                    <Link className={`${cl.ColumnItem} ${cl.SocialLink}`} to={'/3'}>
                        Бам
                    </Link>
                </div>
            </div>
        </Layout.Footer>
    );
};

export default Footer;