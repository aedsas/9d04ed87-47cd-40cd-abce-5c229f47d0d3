import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | chg Web APP',
  description: 'Legal content page.'
};

export default function Legal() {
  return (
    <div className="flex items-center justify-center w-full mb-[100px]">
      <div className="z-10 w-11/12 md:w-10/12 xl:w-8/12 m-auto mt-5 rounded border border-gray-200 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="m-auto my-5"
              width={80}
              height={80}
            />
          </Link>
          <h3>Legal</h3>
          <p className="w-[80%] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi
            dolor, semper ut accumsan ut, imperdiet sit amet mauris. Nam sit
            amet feugiat orci. Nulla interdum placerat metus eget aliquet.
            Vivamus id nunc tellus. Nunc ac cursus neque, non consectetur odio.
            Phasellus venenatis, felis vel dictum viverra, mauris lacus sagittis
            risus, a imperdiet justo odio eget purus. Nulla facilisi. Curabitur
            lacinia nunc lectus, non bibendum ex pharetra in. Etiam est erat,
            pharetra sit amet scelerisque ac, convallis et libero. Nunc
            imperdiet, nibh a vehicula volutpat, est lectus malesuada odio, id
            fermentum orci elit et elit. Sed elementum nulla ante, sed maximus
            felis malesuada sed. Curabitur ut leo vitae dolor tincidunt aliquet
            vel eget velit. Nulla a orci eget purus rutrum fermentum.
          </p>
          <p className="w-[80%] text-gray-500">
            Ut venenatis blandit lectus, et pharetra odio volutpat et. Quisque
            facilisis felis eu convallis faucibus. Fusce varius varius mollis.
            Aliquam eget magna feugiat, scelerisque nulla laoreet, sodales
            tortor. Vivamus consequat eros eu elit porttitor facilisis.
            Phasellus suscipit erat sed ligula posuere, id sollicitudin mauris
            interdum. Nulla et justo mi. Sed vulputate urna vitae imperdiet
            interdum. Pellentesque dui tellus, euismod ut lorem vel, tincidunt
            fringilla dolor. Sed sollicitudin, sem eget ullamcorper tincidunt,
            est turpis bibendum urna, tincidunt volutpat ante erat at mi. Donec
            dapibus elementum est a viverra. Proin pharetra sem sollicitudin
            ante congue congue. Aliquam et libero nunc. Curabitur odio nulla,
            mattis in porta eget, accumsan id odio. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Quisque magna diam, finibus vel vehicula a, scelerisque non nisl.
          </p>
          <p className="w-[80%] text-gray-500">
            Suspendisse tempus laoreet lorem vel malesuada. Aenean eget purus
            malesuada, porttitor felis et, porttitor sapien. Vivamus iaculis
            libero lacus, nec tempor dui gravida imperdiet. Sed efficitur turpis
            vel lectus porta, dapibus fermentum risus dictum. Duis quis enim ut
            ex lobortis sagittis at nec est. Phasellus et lectus eget neque
            mollis viverra. Fusce quis egestas dolor. Nam bibendum turpis sed
            egestas maximus. Nullam a neque a magna auctor eleifend sed sit amet
            nisl. Vivamus mattis, neque id tincidunt aliquet, tellus tortor
            cursus lorem, ut vestibulum nisl nisl vel est. Nulla efficitur porta
            leo, eu imperdiet sapien mattis vel. Vivamus consectetur nulla id
            porttitor blandit. Nam et porttitor libero. Aenean vel ligula dui.
            Nam vel eros tempor, laoreet magna ut, ultricies lectus.
          </p>
          <p className="w-[80%] text-gray-500">
            Donec ac congue diam, at venenatis leo. Aliquam sodales nulla eget
            augue egestas, in ornare mauris scelerisque. Sed hendrerit diam
            ipsum, aliquet porta metus rutrum at. Proin sit amet cursus diam,
            quis mattis nulla. Maecenas et dolor vel augue fringilla porttitor
            eget et nulla. Pellentesque id enim eget ipsum suscipit finibus ut
            ut sapien. Suspendisse gravida volutpat justo ut rutrum. Donec ut
            orci porta, imperdiet nisl ut, cursus purus. Etiam blandit, massa
            non sollicitudin bibendum, quam felis scelerisque massa, at aliquam
            nulla sapien in est. Donec a vestibulum felis, elementum tempus
            nulla.
          </p>
          <p className="w-[80%] text-gray-500">
            Morbi finibus quis nibh eu malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla faucibus euismod tempus. Duis nec
            nibh non felis maximus dictum nec ut ipsum. Praesent eget euismod
            dolor. Pellentesque commodo augue vel neque laoreet ornare. Nulla
            sed nisl gravida, viverra nulla a, accumsan risus. Nullam laoreet
            nunc at magna dignissim, at placerat nisl condimentum.
          </p>
          <Link href="./dashboard" className={'chg-button'}>
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
