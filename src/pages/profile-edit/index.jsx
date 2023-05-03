import "./style.css"
export const ProfileEdit = () => {
    return (
        
        <div className="profileEditBody">
            <div className="profileEdit">
                <h1>Редактирование профиля волонтера</h1>
                <div className="boxPicture">
                    <div className="photoEdit">
                    <div className="left">
                        <div className="circle"></div>
                    </div>
                    <div className="right">
                        <h4>Фото профиля</h4>
                        <button className="photoButton">Изменить фотографию</button>

                    </div>
                    </div>
                    
                <div className="boxMain">
                    <input type="text" placeholder="Имя" name="" id="name" />
                    <input type="date" placeholder="Дата рождения" name="" id="" />
                    <input type="text" placeholder="Место проживания" name="" id="" />
                    <input type="number" placeholder="Телефонный номер" name="" id="" />
                    <div className="socialMedia">
                    <input type="text" placeholder="Instagram" name="" id="" />
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}