import { allData } from '../lib/api';
import ExerciseCard from './ExerciseCard';
import { Exercise } from '../type/type';

const MainSection = async () => {
    const datas = await allData()

    return (
        <div className='my-20 max-w-7xl mx-auto w-full px-4 '>
            <h1>THE LIBRARY</h1>
            <p className='py-5'>Twelve lifts covering every major muscle group.</p>
            <div className='grid w-full md:grid-cols-2 gap-8 lg:grid-cols-3 justify-center items-center'>
                {
                    datas.map((exercise : Exercise) => <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>)
                }
            </div>
        </div>
    );
};

export default MainSection;