// Задача: Создание компонента заголовка

// Условие: Напишите компонент заголовка (Header), который принимает текст заголовка в качестве пропсов и выводит его с использованием тега h1.

type Props = {
    title: string
}
 
function Title({title}: Props) {
    return(
        <h1>Title: {title}</h1>
    );
}

export default Title;
