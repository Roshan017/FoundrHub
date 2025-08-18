import { useSession, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/FoundrHub_Title.png"
            alt="FoundrHub Logo"
            width={194}
            height={45}
            priority
          />
        </Link>

        <div className="flex items-center text-lg font-bold gap-5 text-black">
          {session?.user ? (
            <>
              <Link href={`/startup/create`}>
                <span>Create</span>
              </Link>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </button>
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn("github", { callbackUrl: "/" })}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
