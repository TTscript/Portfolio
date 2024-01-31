import classes from './PhotoBlock.module.scss';
export const PhotoBlock = () => {
    return (
        <section className={classes.photoBlock}>
            <h2 className="visually-hidden">Photo</h2>
            <div className={classes.photoBlockWrapper}>
                <img src="/images/photo.jpg" width={330} height={330} alt="Author's photo" />
            </div>
        </section>
    )
}
