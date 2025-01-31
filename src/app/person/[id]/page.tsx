import { Person } from "@/Person.type";

export type PropsWithParams<P = unknown> = P & {
	params: Promise<Record<string, string>>;
};

const PersonPage = async (props: PropsWithParams) => {
	const { params } = props;
	const { id } = await params;

	const resPerson = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people/${id}`);
	const person: Person = await resPerson.json();

	return (
		<div>
			<h1>{person.name}</h1>
			<p>{person.race}</p>
		</div>
	)
};

export default PersonPage;
