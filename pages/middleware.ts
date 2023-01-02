
// import { NextResponse } from "next/server";
// const verify = require("jsonwebtoken");


// const secret = process.env.SECRET;

// export function middleware(req: any) {
//   console.log('ok');
//   const { cookies } = req;
//   const jwt = cookies.OursiteJWT;
//   const url = req.url;

//   /* login */
//   if (url.includes("/auth/login")) {
//     if (jwt) {
//       try {
//         verify(jwt, secret);
//         return NextResponse.redirect("/");
//       } catch (error) {
//         return NextResponse.next();
//       } 
//     }
//   }

//   /* dashboard */
//   if (url.includes("/dasbhoard")) {
//     if (jwt === undefined) {
//       return NextResponse.redirect("/auth/login");
//     }

//     try {
//       const user = verify(jwt, secret);
//       console.log("verify", user);

//       return NextResponse.next();
//     } catch (error) {
//       return NextResponse.redirect("/auth/login");
//     }
//   }
//   return NextResponse.next();
// }

// // middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   console.log('ok')
  return NextResponse.redirect(new URL('/about-2', request.url))
} 