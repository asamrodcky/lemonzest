import { fetchRecipes } from "../lib/data";
import Image from 'next/image';
import clsx from 'clsx';
import styles from '@/styles/Home.module.css';

export default async function RecipesChart() {
    const allRecipes = await fetchRecipes();
    return (
        <div>
            <h2>
                RECIPES
            </h2>
            <div>
                <div>
                    {allRecipes.map((recipe, i) => {
                        return (
                            <div
                                key={i}
                                className={clsx('flex flex-row items-center justify-between py-4',
                                    { 'border-t': i !== 0 }
                                )}
                            >
                                <div className='flex items-center'>
                                    <Image
                                        src={recipe.image}
                                        alt={recipe.alt}
                                        className='mr-4 rounded-full'
                                        width={32}
                                        height={32}
                                    />
                                    <div className='min-w-0'>
                                        <p className='truncate text-sm font-semibold md:text-base'>
                                            {recipe.name}
                                        </p>
                                        <p className='hidden text-sm text-gray-500 sm:block'>
                                            {recipe.description}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}