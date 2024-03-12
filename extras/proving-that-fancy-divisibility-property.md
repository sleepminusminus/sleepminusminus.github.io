---
layout: default
title: "Proving that fancy divisibility property"
useMathJax: true
---

<h1 id="title">{{page.title}}</h1>

In [this article]({% post_url 2024-03-11-polydivisible-numbers-part-2 %}), I
mentioned a proof of the phenomenon that, in base $$n$$, a number is divisble by
$$n - 1$$ iff the sum of its digits is also divisible by $$n-1$$. This property
is known as "casting out nines" when done in decimal, as you can see
[here](https://en.wikipedia.org/wiki/Casting_out_nines) and
[here](https://math.stackexchange.com/questions/16011/why-9-11-are-special-in-divisibility-tests-using-decimal-digit-sums-cast).

Most proofs of this result use the powers of modular arithmetic,
[as Skirtle does in his post](https://skirtlesden.com/articles/pandigital-polydivisible-numbers)
on polydivisible numbers. But if you're like me, you prefer some plain, old
fashioned algebra to a mind-melting modular arithmetic exercise. So here's the
inelegant algebraic proof of the result, which will hopefully be more accessible
to people, albeit a lot less pretty.

## Without further ado: the proof

**Theorem**: An integer $$x$$, when expressed in base $$n$$, is divisible by
$$n-1$$ if and only if the sum of its digits is also divisible by $$n-1$$.

**Proof**: Start off by picking any integer $$x$$. We need a way to refer to its
digits when expressed in base $$n$$, so let's decide to call the first digit (from
the left) $$x_0$$. Then we'll call the second digit $$x_1$$, and so on. Thus, the
last digit will be $$x_{a-1}$$.

_(Why are we [zero-counting](https://en.wikipedia.org/wiki/Zero-based_numbering)?
Stick around and you'll see; it makes some of the later steps a little easier to
digest.)_

Now, let's assume that $$x$$ is divisible by $$n-1$$. Assuming we can follow a
process to show that the digits of this $$x$$ add up to a number divisible by
$$n-1$$, we'll be done, since we can just follow that process for whatever number
divisible by $$x$$ that we're interested in. But how can we go about finding such
a process?

Well, let's start with defining what we mean by divisibility. 30, for example,
is divisible by 3. That means we can find some number, 10 in this case, which when
multiplied by 3 gives us 30. In general, this is how we think about divisibility
in algebra. So to say that $$x$$ is divisible by $$n - 1$$ means that there's
some integer $$k$$ which, when multiplied by $$n - 1$$, gives us $$x$$. In symbols,

$$\begin{equation}
x = k(n-1)
\end{equation}$$

Now, let's see what happens when we break up $$x$$ into its representation in
base $$n$$. Numbers in base 10 are made by multiplying each digit by increasing
powers of 10 and adding up the resulting numbers:

$$\begin{align*}
351 &= 1 \times 10^0 + 5 \times 10^1 + 3 \times 10^2 \\
    &= 1 \times 1 + 5 \times 10 + 3 \times 100 \\
    &= 1 + 50 + 300.
\end{align*}$$

And this is how we break down representations of numbers in any base. For our
number $$x$$ represented in base $$n$$, then,

$$x = x_0n^0 + x_1n^1 + x_2n^2 + \ldots$$

_(See why the zero-counting helps now?)_ Let's substitute in our other equation
for $$x$$ here:

$$k(n-1) = x_0n^0 + x_1n^1 + x_2n^2 + x_3n^3 + \ldots$$

Notice the $$x_0$$, $$x_1$$, and so on here? We're actually really close to what
we want to prove, which is that the sum of those digits is divisible by $$n-1$$.
If we could manipulate this expression to get something like

$$x_0 + x_1 + x_2 + \ldots = (n-1)(\ . \quad . \quad . ),$$

the proof would be over! We would then have shown that we can multiply some integer
expression on the right by $$n-1$$ to get the sum of the digits of $$x$$, and
therefore that the sum is divisible by $$n-1$$.

Let's start off by thinking about how we can factor an $$n-1$$ out of each of the
terms of our original expression. Since we have an $$n$$, what if we just subtracted
and added 1 from each $$n$$? Then we'd have

$$\begin{align}
k(n-1) = \ &x_0(n-1+1)^0 + x_1(n-1+1)^1 + \\
           &x_2(n-1+1)^2 + x_3(n-1+1)^3 + \ldots
\end{align}$$

If we could just get those digits to multiply with the 1s inside the parentheses!
But here's where the binomial theorem comes in.
[The binomial theorem](https://en.wikipedia.org/wiki/Binomial_theorem) allows us
to express a power in the form $$(a+b)^c$$ as a sum of powers of $$a$$ and $$b$$:

$$\begin{align}
(a+b)^c \ &= {c \choose 0}a^nb^0 + {c \choose 1}a^{n-1}b^1 + \\
        &= {c \choose 2}a^{n-2}b^2 + {c \choose 3}a^{n-3}b^3 + \ldots
\end{align}$$

This is where we get equations like $$(a+b)^2 = a^2 + 2ab + b^2$$. And it lets us
expand our equation to separate out the $$n-1$$s and $$1$$s:

$$\begin{align}
k(n-1) = \ &x_0 + x_1[(n-1) + 1] \ + x_2[(n-1)^2 + 2(n-1) + 1] \ + \\
           &x_3[(n-1)^3 + 3(n-1)^2 + 3(n-1) + 1] + \ldots
\end{align}$$

That's a lot of messy numbers and expressions. But notice: there's those 1s
hanging out by themselves now! When we can distribute the digits and rearrange,
we get the sum that we want:

$$\begin{align}
k(n-1) &= \ x_0 + x_1(n-1) + x_1 \ + x_2(n-1)^2 + 2x_2(n-1) + x_2 \ + \\
       &\qquad x_3(n-1)^3 + 3x_3(n-1)^2 + 3x_3(n-1) + x_3 + \ldots \\
       &= \ x_0 + x_1 + x_2 + x_3 + \ldots + \\
       &\qquad (n-1) [x_1 + x_2(n-1) + 2 + x_3(n-1)^2 + \ldots ]
\end{align}$$

All we have to do is move a few more things around and we get

$$\begin{align}
x_0 + x_1 + x_2 + \ldots = (n-1) [k - x_1 - x_2(n-1) - \ldots ]
\end{align}$$

This process shows that the sum of the digits of $$x$$ is also divisible by $$n-1$$.
We have obtained an integer, the expression on the left-hand side, which, when
multiplied by (n-1), gives us the digit sum. And actually, by following the process
backwards, we can show that if the sum the digits of $$x$$ is divisible by $$n-1$$,
$$x$$ will be divisible by $$n-1$$.

And with that, we've proved our theorem!
