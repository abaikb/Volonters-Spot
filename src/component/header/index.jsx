import './style.css'
import './sidebar.jsx'
import HeroImg from '../image/shutterstock_610533473-1.jpg'
import HamburgerIcon from '../image/bars.png'
import HamburgerMenu from './sidebar.jsx'
import Sidebar from './sidebar'
export function Header() {
    // const App = () => {
    //     const [isOpen, setIsOpen] = useState(false);
      
    //     const handleToggle = () => {
    //       setIsOpen(!isOpen);
    //     }
      
    //     return (
    //       <div>
    //         <MenuIcon onClick={handleToggle} />
    //         {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    //       </div>
    //     );
    //   }

    return (
        <>
        <div className="header">
            <div className='logo'> Volunteer's <span>spot</span> </div>
            <img className='hamburgerIcon' src={HamburgerIcon} alt="" />
            
            <button className='about'>О нас</button>
            <button className='news'>Новости</button>
            <button className='events'>События</button>
            <button className='signup'> Зарегистрироваться</button>
            <button className='login'>Войти</button>
 






            
        </div>
        <div className='hero'>
        <img className='heroBackground' src={HeroImg} alt="" />

                <div className="left">
                    <h3>Volunteer's spot</h3>
                    <div className="wrapper">
                    <div className='description'>Новая площадка в Кыргызстане, на которой волонтеры могут найти возможности для помощи, а организаторы — желающих помочь. Кроме того, Volunteer's spot — целая экосистема IT-сервисов для развития созидательной гражданской активности.</div>
                    <div className='recommendations'>
                        <div> <img src="https://dobro.ru/_next/static/media/home.c5cc78c6.svg" alt="" />
                            Добрые дела рядом с домом</div>
                        <div> <img src="https://dobro.ru/_next/static/media/globe.62519347.svg" alt="" />
                            Участие в масштабных событиях</div>
                        <div> <img src="https://dobro.ru/_next/static/media/rocket.f0e6e8e5.svg" alt="" />
                            Продвижение добрых дел и социальных проектов</div>
                        <div> <img src="https://dobro.ru/_next/static/media/group.0e487d25.svg" alt="" />
                            Привлечение добровольцев</div>
                    </div>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="circle"></div>
                    <img className='heroImg' src={HeroImg} alt="" />
                </div>
        </div>
        </>
    )
}
 export default HamburgerIcon;

