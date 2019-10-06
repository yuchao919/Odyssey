/**
 * Definition for singly-linked list.
 * struct ListNode {
 *		int val;
 *		struct ListNode *next;
 * };
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct ListNode
{
  int val;
  struct ListNode *next;
};

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
  struct ListNode *head = NULL, *prev, *p, *p1, *p2;
  int tens = 0, sum = 0;
  p1 = l1;
  p2 = l2;

  if (p1 == NULL && p2 == NULL)
  {
    return head;
  }
  else if (p1 == NULL)
  {
    head = malloc(sizeof(*head));
    head->next = NULL;
    head->val = p2->val;

    p2 = p2->next;
    prev = head;

    while (p2 != NULL)
    {
      p = malloc(sizeof(*p));
      p->next = NULL;
      p->val = p2->val;

      prev->next = p;
      prev = p;

      p2 = p2->next;
    }
    return head;
  }
  else if (p2 == NULL)
  {
    head = malloc(sizeof(*head));
    head->next = NULL;
    head->val = p2->val;

    p1 = p1->next;
    prev = head;

    while (p1 != NULL)
    {
      p = malloc(sizeof(*p));
      p->next = NULL;
      p->val = p2->val;

      prev->next = p;
      prev = p;

      p2 = p2->next;
    }

    return head;
  }
  else
  {
    head = malloc(sizeof(*head));
    head->next = NULL;

    sum = p1->val + p2->val + tens;
    head->val = sum % 10;
    tens = sum / 10;

    p1 = p1->next;
    p2 = p2->next;
    prev = head;
  }

  while (p1 != NULL && p2 != NULL)
  {
    p = malloc(sizeof(*p));
    p->next = NULL;

    sum = p1->val + p2->val + tens;
    p->val = sum % 10;
    tens = sum / 10;

    p1 = p1->next;
    p2 = p2->next;
    prev->next = p;
    prev = p;
  }

  while (p1 != NULL)
  {
    p = malloc(sizeof(*p));
    p->next = NULL;

    sum = p1->val + tens;
    p->val = sum % 10;
    tens = sum / 10;
    prev->next = p;
    prev = p;

    p1 = p1->next;
  }

  while (p2 != NULL)
  {
    p = malloc(sizeof(*p));
    p->next = NULL;

    sum = p2->val + tens;
    p->val = sum % 10;
    tens = sum / 10;
    prev->next = p;
    prev = p;

    p2 = p2->next;
  }

  if (tens != 0)
  {
    p = malloc(sizeof(*p));
    p->next = NULL;
    p->val = tens;

    prev->next = p;
  }

  return head;
}

static struct ListNode *nodeBuild(const char *digits)
{
  struct ListNode *head = NULL, *prev, *p;
  int i = 0, len = strlen(digits);
  if (len > 0)
  {
    head = malloc(sizeof(*head));
    head->val = digits[0] - '0';
    head->next = NULL;
    prev = head;
    i++;
  }

  while (i < len)
  {
    p = malloc(sizeof(*p));
    p->val = digits[i] - '0';
    p->next = NULL;
    prev->next = p;
    prev = p;
    i++;
  }

  return head;
}

static void show(struct ListNode *ln)
{
  struct ListNode *p;
  p = ln;
  while (p != NULL)
  {
    printf("%d", p->val);
    p = p->next;
  }
}

int main(int argc, char **argv)
{
  struct ListNode *l1 = nodeBuild("916");
  struct ListNode *l2 = nodeBuild("0");

  struct ListNode *result = addTwoNumbers(l1, l2);

  show(result);

  return 0;
}