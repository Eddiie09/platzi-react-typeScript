// Genera un número aleatorio entre 1 y 123
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    return (
        <img
            width={320}
            height={'320'}
            src={image}
            className="rounded"
            alt="Random Fox"
        />
    );
};
