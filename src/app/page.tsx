import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin")
  }
  return (
    <div ><iframe src="https://iframe.mediadelivery.net/embed/297449/d4644f9c-8b27-4742-8e30-ac560aa6deed?autoplay=true&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }} allowFullScreen={true} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe></div>
  );
}
