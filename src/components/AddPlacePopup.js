import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [imageName, setImageName] = React.useState('');
    const [imageLink, setImageLink] = React.useState('');


    function handleChangeimageName(e) {
        setImageName(e.target.value);
    }

    function handleChangeimageLink(e) {
        setImageLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            imageName,
            imageLink,
        });
    }

    return (
        <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" name="title" placeholder="Название" onChange={handleChangeimageName} className="popup__form-text popup__form-text_type_title" id='title-input' minLength="1" maxLength="30" autoComplete="off" required />
            <span className='popup__form-text-error' id='title-input-error'></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" onChange={handleChangeimageLink} className="popup__form-text popup__form-text_type_link" id='url-input' autoComplete="off" required />
            <span className='popup__form-text-error' id='url-input-error'></span>
            <input type="submit" value="Создать" className="popup__form-submit popup__form-submit_type_add-card" />
        </PopupWithForm>
    );
}

export default AddPlacePopup;