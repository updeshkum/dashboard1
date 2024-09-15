import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import '@/public/Images/favicon.ico'
import Image from 'next/image';
import Link from 'next/link';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} bg-white w-full flex justify-items-center justify-arround flex-row items-top leading-none text-white`}
    >
      {" "}
      <Link href="/login">
        <Image
          className="w-12 mx-4"
          src="/images/favicon.ico"
          width={128}
          height={128}
          alt="Picture of the author"
        />
      </Link>
      <p className=" text-black text-[44px]">SivinZ</p>
    </div>
  );
}
