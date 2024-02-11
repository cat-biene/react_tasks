// Задача: Создание компонента изображения

// Условие: Напишите компонент изображения (Image), который принимает URL изображения в качестве пропсов и отображает его.

type Props ={
    imgUrl: string
}

function Img({imgUrl}: Props){
    return <img src={imgUrl} alt="photo" />;
}

export default Img;
