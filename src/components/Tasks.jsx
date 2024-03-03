import Card from './Card';


const Tasks = ({ allTasks }) => {

    const groupTasks = allTasks?.reduce((accumulator, task) => {
        const category = task['status']

        if (!accumulator[category]) {
            accumulator[category] = []
        }

        accumulator[category].push(task)
        return accumulator
    }, {})
    const categories = Object.keys(groupTasks)

    return (
        <section className='Tasks'>
            {categories?.map((eachCategory) => {
                return (
                    <section key={eachCategory}>
                        <h2>{eachCategory}</h2>
                        {groupTasks[eachCategory]?.map((task) => (
                            <Card
                                key={task.id}
                                title={task.title}
                                description={task.description}
                            />))}
                    </section>
                )
            })
            }
        </section>
    )
}

export default Tasks