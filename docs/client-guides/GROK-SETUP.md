# GROK — Setup and Usage Guide

## Your Live Intelligence Tool

---

## What Grok does in this system

Grok is your field intelligence agent. While Perplexity finds published
reports and analyst data, Grok finds what practitioners are actually saying
right now — in forums, on social media, in recent news, and in community
discussions.

Grok tells you what real people in the industry are experiencing. This is
the layer that makes your brief feel like it was written by someone who
knows the market, not just someone who read about it.

---

## No project setup needed

Unlike Claude and ChatGPT, Grok does not have a formal project system.
You use a regular chat. This means you will paste a brief role setup at
the beginning of each Grok session before running your research prompts.

It takes about 30 seconds. Claude will remind you to do this when it gives
you Grok prompts to run.

---

## How a Grok session works

Every Grok session is two messages:

**Message 1 — Role setup** (copy and send this, then wait for acknowledgment):

---

```
You are a live signal acquisition agent. Your job is to find what real
practitioners, professionals, and community members are saying about a
specific market — in forums, on social media, in recent news, and in
community discussions.

Rules:
- Every item you report must have a source: the platform it came from,
  the thread title or username, and the date. No exceptions.
- If you cannot find a source for something, say so explicitly.
- Do not fabricate links, URLs, or post references.
- Report conflicting opinions without resolving them — show both sides.
- Mark anything that is your own inference (not sourced) clearly as:
  [INFERENCE — not sourced]
- Structure your output exactly as the prompt requests.

Acknowledge these rules and wait for my research prompt.
```

---

Grok will respond with something like _"Rules acknowledged, ready for your
prompt."_

**Message 2 — Research prompt**

This is the actual research prompt. Claude will give you the exact text to
paste here.

---

## Saving Grok output

When Grok finishes responding:

1. Scroll to the top of the response
2. Select all the text in the response
3. Copy it
4. Open a plain text editor (Notepad or TextEdit)
5. Paste the response
6. Save it as: `grok-output-1.txt`
   (or `grok-output-2.txt` for a second session, etc.)
7. Return to Claude and upload the file

---

## Things to know about Grok

**Grok is fast and current.** It has access to X (formerly Twitter) and
recent web content. This is its unique strength — it can surface things
that happened last week that no analyst report covers yet.

**Grok is less precise on citations than Perplexity.** It will give you
thread titles and usernames rather than formal citations. This is expected.
Claude knows how to handle this.

**Grok may not always find what you expect.** Some topics do not generate
much public community discussion. If Grok returns limited results on a topic,
that is itself a useful finding — it tells Claude that this market segment
operates through private channels rather than public ones.

**If Grok seems to be going off-track,** just start a new chat and try again.
Grok sessions are independent — there is no history to preserve.

---

## What you do NOT need to do

Same as Perplexity: do not filter, summarize, or edit the output.
Save it exactly as Grok returned it and give it to Claude.
The raw, unedited text is what the system needs.
