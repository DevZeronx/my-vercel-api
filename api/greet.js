export default function handler(request, response) {
  
  // URL থেকে 'name' নামের ক্যোয়ারী প্যারামিটারটি নেওয়া হলো।
  // যদি 'name' না পাওয়া যায়, তাহলে ডিফল্ট হিসেবে 'Guest' ব্যবহার করা হবে।
  const { name = 'Guest' } = request.query;

  // স্ট্যাটাস 200 (OK) সেট করা হলো এবং একটি বার্তা পাঠানো হলো।
  response.status(200).send(`Hello, ${name}!`);
}
