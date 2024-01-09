---
layout: post
title: "What's the deal with 381,654,729? Part 1: Transpositions"
useMathJax: true
---

A few days ago I came across this video:

{% youtube "https://www.youtube.com/watch?v=bE5_kqdSdeo" %}

To provide a brief summary, 381,654,729 is the only number with all the digits
from 1 to 9 that allows you to form a number divisible by any digit, 1 through
9, just by taking that many digits from its beginning. For example, 381 (the
first three digits) is divisible by 3 (127 $$\times$$ 3 = 381) and 381,654 (the
first six digits) is divisible by 6 (3 $$\times$$ 63609).

This property is actually quite difficult to prove; when I first watched that
video I did [some scribbling](/assets/images/381654729-attempted-proof.png)
in a Google Keep note but didn't get far. If you're interested in a proof,
though this result, ProofWiki has [a great article](https://proofwiki.org/wiki/Polydivisible_Number/Examples/381,654,729")
on the subject.

In this series, I'll post on some interesting facts I've come across in my
forays surrounding this magic number. To start off, I'll lay out some terms and
notation that mathematicians use to talk about numbers like this one. That way
it's a little easier for me to discuss the topic. Then we'll discuss
transpositions and how they might help prove the divisibility properties of our
number.

<h2>Establishing terminology</h2>

First, we'll use the term <span class="point">pandigital</span> to refer to
numbers that have all digits 1-9 only once.<span class="note-wrapper"><span class="note">
The less common term for this is penholodigital; it's used by the ProofWiki
article since they reserve pandigital for numbers that have all digits 0-9.
Also, pandigital numbers can exist in bases other than base 10. But I'll get to
that soon.
</span></span> The fact that the number we're studying is penholodigital will
come in handy when we're trying to narrow down options for the digits.

Second, we'll use the term <span class="point">polydivisible</span> for the main
property about divisibility that we're interested in. A number is polydivisible
when we can always take its first $$n$$ digits and form a number out of them,
and that number is itself divisible by $$n$$. For example, the number 123 is
polydivisible because the number formed by the first digit, 1, is (obviously!)
divisible by 1, the number formed by the first two digits, 12, is divisible by
2, and the number formed by the first three digits, 123, is divisible by 3.

Now, it would get a little tedious in our discussion if I had to keep referring
to "the number formed by the first digits" of the number we're discussing. So
we'll agree on some notation to simplify the conversation.<span class="note-wrapper">
<span class="note">
I'm borrowing this notation from the ProofWiki article as well.</span></span>

Consider some number $$x$$ with a first digit of $$x_1$$, a second digit of
$$x_2$$, and in general an $$n$$-th digit of $$x_n$$. If we want to refer to the
number given by the first 3 digits of this number, we'll use square brackets
around the digits:

$$[x_1 x_2 x_3]$$

Similarly for the number formed by the first digits:

$$[x_1 x_2 \ldots x_n]$$

These conventions will make the following discussion flow a bit better.

<h2>Transpositions defined</h2>

In the comments of the video above, [@isaiahos.](https://www.youtube.com/channel/UC-JSKreqwJwQpu-OXjP2J1A)
makes an astute observation: looking at the number 381,654,729, you can see that
some numbers are switched in pairs from 123,456,789. Specifically, 1 is swapped
with 3, 2 with 8, and 4 with 6.

This insight got me thinking: what if we used transpositions to represent
pandigital numbers? If you aren't familiar with what transpositions are, you can
think of them as swaps of two objects in an ordered list. Take the list
$$(a, b, c)$$ for example: we can swap $$a$$ and $$b$$ to get $$(b, a, c)$$.
Since these two numbers were at position 1 and 2 in the original list, we can
also represent this swapping action as $$(1 \ 2)$$. This is what mathematicians
refer to as a <span class="point">transposition</span>, and they show up all
over the place in group theory, algebra, and combinatorics.

The reason we can apply transpositions to pandigital numbers is because they are
ordered arrangements of a list of numbers: the digits 1-9. If we take the list
$$(1, 2, 3, 4, 5, 6, 7, 8, 9)$$ to represent the number 123,456,789, then
applying the previous transposition $$(1 \ 2)$$ to this list would give us the
new number 213,456,789. Moreover, our magic number would be represented by the
transpositions $$(1 \ 3)(2 \ 8)(4 \ 6)$$.

<h2>Do transpositions actually help us?</h2>

Is there something significant to this way of representing pandigital numbers?
I'm not sure. If there was some way to encode properties about divisibility into
transpositions using this notation, we would be able to prove fairly easily that
our magic number is the only number like it by proving that a certain set of
transpositions is the only one that satisfies the divisibility properties.

Now, some of the divisibility properties are easy to encode. For instance, we
know that a number is divisible by 5 only when it ends in 0 or 5. But we defined
pandigital numbers to exclude the number 0. So if we write our magic number as
$$[x_1x_2x_3x_4x_5x_6x_7x_8x_9]$$, we know that $$x_5 = 5$$, since we want
$$[x_1x_2x_3x_4x_5]$$ to be divisible by 5.

Therefore, we can't have any transpositions containing 5. If we did have one, we
would be swapping 5 away from the 5th digit, so $$x_5 \neq 5$$, which we can't
have.<span class="note-wrapper"><span class="note">
Actually, this isn't the full story, since it turns out that transpositions can
overlap, which would mean swaps aren't the _only_ action we can perform on
pandigital numbers. As it turns out, though, any cycle that moves 5 would
have to contain 5.
</span></span> So we can eliminate nine of the total transpositions from our
solution. Also, we know that all of $$x_2$$, $$x_4$$, $$x_6$$, and $$x_8$$ must
be even, so we can eliminate the cycles that swap odd and even numbers.

This exercise brings the total number of possible transpositions down to 12! And
with some more thought it's certainly possible to bring this down further.
Ideally, we might be able to assert something about whether overlapping
transpositions [for example, $$(1 \ 3)(3 \ 5)$$] are allowed, or whether or not
the solution has an even number of transpositions. My only worry is that this
particular case is a little too specific to benefit from the use of
transpositions. But I'll keep thinking about it.

<h2>Looking forward</h2>

My next post on this topic will address the question of pandigital numbers in
bases other than 10. Can we say more about pandigital and polydivisible numbers
in other bases? Do transpositions help more in those cases, especially given the
lower number of elements? I'm excited to explore this topic further.
