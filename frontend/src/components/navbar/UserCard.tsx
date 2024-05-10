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
  const userImage = user?.image ? (
    <Image
      className="rounded-full"
      src={user?.image}
      width={35}
      height={35}
      alt={user?.name ?? "Profile Picture"}
      priority={true}
    />
  ) : null;

  return (
    <section>
      {/* {greeting} */}
      {/* {emailDisplay} */}
      {userImage}
    </section>
  );
}
