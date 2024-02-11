type Props ={
    firstName: string,
    lastName: string,
    grades: number[]
};

function Student({firstName, lastName, grades}: Props) {
    const averageGrade = grades.length > 0 ? grades.reduce((acc, curr) => acc + curr, 0) / grades.length : 0;
    return(
        <div>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <p>Average grade: {averageGrade}</p>
        </div>
    );
}

export default Student;
 
// Конечно, давайте подробно разберем эту строку кода:

// javascript
// Copy code
// const averageGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
// grades: Это массив оценок студента, который передается компоненту Student в качестве пропса.

// reduce(): Это метод массива, который позволяет свести массив к одному значению. В данном случае, мы используем его для вычисления суммы всех оценок.

// (acc, curr) => acc + curr: Это функция обратного вызова, которая принимает два аргумента: acc (аккумулятор) и curr (текущий элемент массива). В этой функции мы просто складываем текущую оценку с аккумулятором.

// , 0: Начальное значение аккумулятора. В данном случае, начальное значение установлено в 0.

// / grades.length: После выполнения reduce(), мы делим сумму всех оценок на количество оценок в массиве, чтобы получить среднее значение.
