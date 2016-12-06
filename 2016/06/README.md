--- Day 6: Signals and Noise ---

Something is jamming your communications with Santa. Fortunately, your signal is only partially jammed, and protocol in situations like this is to switch to a simple repetition code to get the message through.

In this model, the same message is sent repeatedly. You've recorded the repeating message signal (your puzzle input), but the data seems quite corrupted - almost too badly to recover. Almost.

All you need to do is figure out which character is most frequent for each position. For example, suppose you had recorded the following messages:

e   e   d   a   d   n
d   r   v   t   e   e
e   a   n   d   s   r
r   a   a   v   r   d
a   t   e   v   r   s
t   s   r   n   e   v
s   d   t   t   s   a
r   a   s   r   t   v
n   s   s   d   t   s
n   t   n   a   d   a
s   v   e   t   v   e
t   e   s   n   v   t
v   n   t   s   n   d
v   r   d   e   a   r
d   v   r   s   e   n
e   n   a   r   a   r

e   a   s   t   e   r

The most common character in the first column is e; in the second, a; in the third, s, and so on. Combining these characters returns the error-corrected message, easter.

Given the recording in your puzzle input, what is the error-corrected version of the message being sent?