import style from './footer.module.css';

const Footer =()=>{
    return(
        <footer>
                <div className={style.logo}>
                    <img src="../img/logo192.png" width= "110" alt='...куда-то убежала' />
                </div>
                <p>
                Единый многоканальный Андрей: +7 (999) 139-98-58
                <br/>
                Многоликий одноканальный Василий: +7 (920) 257-38-07
                <br/>
                Заглядывайте к нам на огонёк по адресу:<a href='https://vk.com/steel_traditions'> https://vk.com/steel_traditions</a>
                </p>
            </footer>
    )
}
export default Footer