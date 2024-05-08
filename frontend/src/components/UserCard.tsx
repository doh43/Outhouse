import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  // const greeting = user?.name ? (
  //   <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //     Hello {user?.name}!
  //   </div>
  // ) : null;

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <Image
      className="p-1 rounded-full relative left-[-17.5px]"
      src={user?.image}
      width={40}
      height={40}
      alt={user?.name ?? "Profile Picture"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col">
      {/* {greeting} */}
      {/* {emailDisplay} */}
      {userImage}
      {/* <p className="text-2xl text-center">{pagetype} Page!</p> */}
    </section>
  );
}
