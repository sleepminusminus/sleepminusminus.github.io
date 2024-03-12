---
layout: post
title: "What's the deal with 381,654,729? Part 2: Rounding the Bases"
useMathJax: true
---

It's been quite a while! Maybe soon I'll make a post explaining where I've been
for the past few weeks. In the meantime though, it's time to wrap up the
polydivisible numbers series by discussing how the puzzle of finding
polydivisible, pandigital numbers changes when you're working in bases other
than base 10.

First, I'll introduce how the puzzle changes when we're working
with numbers in other bases. Then I'll show off a nice (though maybe not
the _nicest_) proof of why there can be no polydivisible and pandigital numbers
in any odd bases. Finally, I'll talk about several unsolved problems with these
puzzles and why, unfortunately, I don't see solutions to them appearing any time
soon.

_If you haven't read the first article in this series yet,
[you can read it here]({% post_url 2024-01-09-polydivisible-numbers-part-1 %}).
And if you don't know what "bases" are in math, see
[this video](https://www.youtube.com/watch?v=bEsOiYsmW_Y), which introduces the
subject in quite a nice way._

## Getting polydivisible with more (or less!) digits

In the last post, we were trying to shuffle around all the decimal digits
(except zero) to get numbers which let you chop off the first $$n$$ digits to
get a number divisible by $$n$$. But of course you're now thinking, "Why stop at
_decimal_ digits?" Why can't we look for polydivisible pandigital numbers in
hexadecimal or octal, for example?

(Well, if you're a mathematician you were probably thinking that. The rest of
us mortal human beings will have to pretend.)

As it turns out, we can find these numbers in other bases! All we have to do to
look for pandigital and polydivisible numbers in octal, for example, is shuffle
around the digits 1-7 to get numbers that satisfy our polyfactorization property.
The key difference is that some of our divisibility properties are different in
other bases. For example, if we want to check if a number is divisible by 5 in
decimal, all we have to do is see if the number ends in 0 or 5. But this doesn't
work in base 8. Take the number 35. In decimal it ends in 5, but in octal it's
43 ($$4 \times 8 + 3 \times 1 = 35$$) which clearly doesn't end in 0 or 5.

_[For the rest of this article, we'll use the standard subscript notation to
distinguish representations of numbers in other bases: $$35_{10}$$ (decimal) or
$$43_{8}$$ (octal) or $$100011_{2}$$ (binary).]_

So we would have to rethink how we think about divisibility to solve these
problems. But when we do, we'll find that in some ways, the problem's much
easier in lower bases. Base 3, for example, has no solutions, since the only
numbers that use all the non-zero digits in base three are $$12_{3}$$ and
$$21_{3}$$, which are 5 and 7 in decimal, and neither of those are divisible by
two. Base 4 has the obvious solutions $$123_{4}$$ and $$321_{4}$$. And so on.
Here's a table with all the solutions up to base 10:

| Base | Number                                      |
|------|---------------------------------------------|
| 2    | $$1_2$$                                     |
| 3    | None                                        |
| 4    | $$123_4$$, $$321_4$$                        |
| 5    | None                                        |
| 6    | $$14325_6$$, $$54321_6$$                    |
| 7    | None                                        |
| 8    | $$3254167_8$$, $$5234761_8$$, $$5674321_8$$ |
| 9    | None                                        |
| 10   | $$381654729_{10}$$                          |

## What's odd about odd bases?

Taking a look at that table, you might immediately notice something fishy: all
the odd bases don't have any solutions! Surely that must be a coincidence, right?

Well, actually, it's not. There's a mathematical reason for why no odd base can
have solutions to our little puzzle. It has to do with something that remains
unchanged about the divisibility rule for $$n-1$$ in base $$n$$. In base 10, for
instance, we can find out if a number is divisible by 9 by adding up its digits.
If the digits sum up to a number that's divisible by 9, the original number also
is. Take 729: without any calculations I know this number is divisible by 9,
since $$7 + 2 + 9 = 18$$, which is divisible by 9.

Pretty neat, right? Well, as it turns out, this also works for other bases. For
example, just by looking at it, I know the number $$610_8$$ is divisible by seven:
$$6 + 1 + 0 = 7$$. And this checks out—$$610_8$$ is $$392$$ in decimal, and
$$ 7 \times 56 = 392$$.

If you're looking for a detailed proof of this result, [Skirtle has a super
elegant one](https://skirtlesden.com/articles/pandigital-polydivisible-numbers)
which uses modular arithmetic. It's also possible to prove using the definition
of divisibility combined with the binomial theorem,
[which I show here](/extras/proving-that-fancy-divisibility-property)
for those interested. (I don't think I've seen a proof like mine of this result
elsewhere. Probably because it's longer and uglier than the modular arithmetic
one. But it's helpful if, like me, you never read up on number theory.)

In any case, using that result, we can show that no odd base can have a
pandigital and polydivisible number. Let's pretend, for a moment, that it's
possible for such a number $$x$$ to exist in base $$n$$, where $$n$$ is odd.
We know that $$x$$ is divisible by $$n-1$$ by how polydivisible numbers work. But
this also means the sum of $$x$$'s $$n-1$$ digits is divisible by $$n-1$$. We
can find this sum $$S$$ using the nifty
[Arithmetic Series formula](https://en.wikipedia.org/wiki/Arithmetic_progression):

$$S = \frac{n(n-1)}{2} = \frac{n}{2}(n-1)$$

Now, since $$S$$ is divisible by $$n-1$$, we can find an integer $$k$$ which,
when multiplied by $$n-1$$, gives us $$S$$. In symbols, $$S = k(n-1)$$. But when
we combine this with our above equation, we get $$k(n-1) = \frac{n}{2}(n-1)$$, so
$$k = \frac{n}{2}$$ and $$n = 2k$$. However, if $$n$$ is equal to some integer
multiplied by 2, $$n$$ has to be even, which isn't true—we said that $$n$$ was
odd earlier!

The game is up, and we are forced to conclude that no number $$x$$ can be both
pandigital and polydivisible in an odd base.

## The future of the pandigital-polydivisible puzzle

What's next for this problem? What about bases that are bigger than 10; what
do polydivisible, pandigital numbers look like in those bases? And what happened
to that whole transpositions discussion from last time? As I wrap up this article,
I'll try to give answers to all these questions.

First, a word about bigger bases. You might expect that the more digits there are
in a base, the more chances there are for numbers that play our game. But actually
the more digits there are, the _less_ likely it is for pandigital, polydivisible
numbers to appear. And actually, this makes a good deal of sense when you think
about it. As the number of digits increases, there's more divisibility rules to
consider when you're looking for magic numbers. So we should expect large bases
not to have many of these numbers.

But here's the twist: after base 14, no one has found any pandigital, polydivisible
numbers.

Yep. The largest such number is in base 14, and it's $$9C3A5476B812D_{14}$$, or
$$559922224824157_{10}$$.
[Skirtle's article](https://skirtlesden.com/articles/pandigital-polydivisible-numbers)
calculates up to base 60 and none of the bases after 14 have any of these numbers.
It's wild to think about, even with the above argument _and_ a few extra
considerations relating to GCDs and modular arithmetic, which you can explore in
[this short paper by Travis Dillon](https://www.parabola.unsw.edu.au/files/articles/2010-2019/volume-53-2017/issue-1/vol53_no1_3.pdf).

Now, does any of that mean that there _are_ no magic numbers after base 14?
Certainly not. That's one of the open problems currently in polydivisibility. And
I have some hope that our discussion of transpositions might shed light on that
conversation. Sadly, I haven't done enough work in group theory to be able to
say much more about transpositions than I did in my last article. I did try some
scribbling in a notebook looking for patterns, and I might keep trying that, since
if we're able to find some sort of rule, we can bring the full range of group
theory mechanics to bear on this conversation.

But I'm not all that optimistic about that search. And it seems I'm not alone in
that. There's little to no academic work on the problem. The several academic
databases I queried looking for answers all came up mostly blank, and the only
hits I did find were one book listing it as a
"[creative puzzle](https://doi.org/10.1007/978-981-19-6565-4_4)" and a wiki article
which calls it a
"[recreational mathematics](https://wiki.newshift.net/en/Polydivisible_number#cite_note-Lanier-6)"
problem. Which certainly doesn't bode well for anyone looking to seriously reflect
on the question!

Yet even as I reflect on the problem on my own, I'm inclined to agree with the
consensus. The intersection between pandigital and polydivisible numbers is slim
enough that none of the results are super generalizable or relevant to other
fields of math. The best one could say is that it's a unique application of
either group theory or modular arithmetic, but it likely wouldn't break any new
ground in either field. Like it or not, the future of pandigital-polydivisible
numbers is grim.

Still, I've got a few project ideas lurking around in my head. I do want to keep
exploring the group theory side of the problem like I mentioned. I want to keep
exploring polydivisibility as its own property, since there are a lot of fascinating
articles on that by itself. And as I was writing this article, I realized that
there's not really a great way to convert a large quantity of numbers from one
base representation to another. So I'll probably code something up for
that—ideally in Java/Python/JavaScript so others can use it in their own projects.

That's it for the polydivisible numbers series for now! Who knows—maybe I'll
be back soon with another article on this topic after I come up with an incredible
breakthrough. For now, I've got a few article ideas lingering around in my head.
Mostly non-math ones. So look out for that next month!

## Links

In honor of Skirtle's article, and in case anyone else wants to jump on this topic,
here's a list of helpful links:

* Matt Parker wrote [Things to Make and Do in the Fourth Dimension](https://www.amazon.com/Things-Make-Fourth-Dimension-Mathematicians/dp/0374535639),
which I think motivated most people to take up this puzzle.
* [The Springer book](https://doi.org/10.1007/978-981-19-6565-4_4)
that lists it as a unique problem.
* [ProofWiki's proof](https://proofwiki.org/wiki/Polydivisible_Number/Examples/381,654,729)
of the result, which is also a great place to start.
* [Travis Dillon's short paper](https://www.parabola.unsw.edu.au/files/articles/2010-2019/volume-53-2017/issue-1/vol53_no1_3.pdf) 
on the puzzle in other bases. It's very comprehensive and helped me fill in the
details of my $$n-1$$ digit sum divisibility proof.
* [Skirtle's article](https://skirtlesden.com/articles/pandigital-polydivisible-numbers),
as already mentioned many times.
* And the [GitHub repo](https://github.com/skirtles-code/pandigital-polydivisible)
that he used to test for pandigital, polydivisible numbers in various bases.
* [The OEIS sequence](https://oeis.org/A163574) of all pandigital, polydivisible
numbers in bases 2-57.
* Lastly, the video that started it all for me:
[Domotro's whiteboard exploration of 381,654,729](https://www.youtube.com/watch?v=bE5_kqdSdeo).