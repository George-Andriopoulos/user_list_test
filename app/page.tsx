import { Metadata } from "next";
import { users } from "@/constants";
import Image from "next/image";

export const metadata: Metadata = {
	title: "User List | Super Heroes",
	description:
		"Browse the list of amazing Super Heroes styled with Tailwind CSS.",
};

export default function UsersPage() {
	return (
		<main className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-4 text-gray-800 text-center'>
				👊 Heroes List 👊
			</h1>
			<p className='mb-6 text-center text-gray-600'>
				Here are the Heroes currently on the platform:
			</p>

			<ul className='list-none p-0 space-y-4'>
				{(users as User[]).map((user) => (
					<li
						key={user.id}
						className='border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white hover:bg-gray-50 cursor-pointer'>
						<strong className='block text-xl font-semibold mb-2 text-gray-900'>
							{user.name}
						</strong>
						<p className='m-0 text-gray-700'>{user.description}</p>

						<div className='mt-3'>
							<Image
								src={user.image}
								alt={`Profile picture of ${user.name}`}
								width={60}
								height={60}
								loading='lazy'
								className='rounded-full border-2 border-gray-300'
							/>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
