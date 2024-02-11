// Задача: Создание компонента кнопки

// Условие: Создайте простой компонент кнопки (Button), который принимает текст кнопки в качестве пропсов и отображает этот текст внутри кнопки.

 type Props = {
    title: string
 }

function Button({title}: Props){
    return (
        <button>{title}</button>
    );
}

export default Button;

