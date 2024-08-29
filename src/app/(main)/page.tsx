import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "@/auth";
import VideoPlayer from "./_components/video-player"

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin")
  }
  return (
    <div ><VideoPlayer /></div>
  );
}
