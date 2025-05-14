This is a Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App from [JavaScrip Mastery](https://www.youtube.com/watch?v=Zq5fmkH0T78&ab_channel=JavaScriptMastery)

WHAT I LEARNED

1. How to make a signin/signout button inside a server component.

We could try button onClick={signOut} ===> need to add await ===> to do it we need to turn it into a server action ("use server")
===> but button onclick is client ===> button onclick ---> form action + button submit

a. `<button onClick={signIn('github')}>`

b.

```
<button onClick={async () => {
    "use server"
    await signIn('github')
}}>
    <span>Login</span>
</button>
```

c. (FINAL VERSION)

```
<form action={async () => {
    "use server"
    await signIn('github')
}}>
    <button type="submit">Login</button>
</form>
```

2. Components can be made `ASYNC` cause it's a server rendered component
   (I need to make it async to be able to wait for an authorisation `const session = await auth()`)

3. It's preferrable to host fonts locally.
