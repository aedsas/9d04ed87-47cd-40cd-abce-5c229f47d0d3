import { auth } from '@/app/auth';

export default async function AuthStatus() {
  const session = await auth;
  return session?.user
}

// export default async function AuthStatus() {
//   console.log(getSession().user)
//
//   return (
//     <div className="absolute top-5 w-full flex justify-center items-center">
//       <p className="text-sm">
//           Signed in as
//       </p>
//     </div>
//   );
// }
