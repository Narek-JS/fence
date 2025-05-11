interface Props {
  params: { id: string };
}

const WorkDetails: React.FC<Props> = ({ params }) => {
  return <h1 className="p-28">ID -- {params.id}</h1>;
};

export default WorkDetails;
