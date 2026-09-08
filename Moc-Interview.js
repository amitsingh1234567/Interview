// Angular: -
/*
Q.1 If your reactive form becomes very large, 
    like 20 dynamic sections, how do you structure it so it's still maintainable and easy to test?
Ans:- 
I'd say split the large form into feature components, pass FormGroup or FormArray into child components, 
use factory methods like createSkillForm, keep validators reusable, and test sections independently. 
That keeps things modular and maintainable. Make sense? Great.

Q.2 How would you implement an async validator that- say checks the backend to see if a skill already exists, without spamming requests?
*/


// MongoDB
/*
Q.1 You've used MongoDB a lot. Tell me how you'd model a one-to-many relationship, say users and orders.
 Would you embed or reference, and why?

*/


// Nodejs
/*
Q.1 If you notice high CPU usage on one core and slow responses, what's your step-by-step diagnosis plan?
Ans:- 
In production, I'd use AWS S3 with pre-signed URLs. The client first requests a temporary upload URL from the Node.js backend. The backend generates a pre-signed URL valid for a few minutes, and then the client uploads the file directly to S3. This reduces CPU, memory, and bandwidth usage on the Node.js server and scales much better for scenarios like 1,000 concurrent uploads

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({ region: "ap-south-1" });

const command = new PutObjectCommand({
  Bucket: "my-bucket",
  Key: "uploads/profile.jpg",
  ContentType: "image/jpeg",
});

const url = await getSignedUrl(client, command, {
  expiresIn: 300, // 5 minutes
});

console.log(url);

{
  "uploadUrl": "https://my-bucket.s3.amazonaws.com/uploads/profile.jpg?X-Amz-..."
}
  
Client uploads directly
  await fetch(uploadUrl, {
  method: "PUT",
  body: file,
});

Q.2 How to implement the rate-limitter
Ans:-
What I was aiming for is something like, "I'd use express rate limit," shared store like Redis for multi-instance, config different limits for sensitive APIs, return429 when exceeded, maybe whitelist trusted internals. 
That could show you know implementation and production concerns.

Q.3 Suppose 1,000 users upload files at once, how might you handle that load without crashing the server?

Ans:- That's a common interview one. I'd say something like: use streaming uploads to avoid loading whole files into memory, consider direct to S3 uploads with pre-signed URLs, and push heavy processing to background queues. And then I'd follow up, why is streaming better than reading the entire file into memory? And would you upload through Node or directly to S3?


*/

/*
You are about to take my interview for company which has the name "Deloitte".
you are only going to reply as the interviewer, you will ask me the question to hire me for a job of "MEAN stack developer"
in your company you will ask me the question one by one and also ask the follow up question if needed , 
I am uploading my resume go through it first and start my interview 
*/