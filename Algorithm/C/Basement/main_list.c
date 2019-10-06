#include <stdio.h>
#include <stdlib.h>

typedef int ElemType;

typedef struct LNode {
	ElemType data;
	struct LNode *next;
}LNode, *LinkList;

LinkList CreateList(LinkList *list) {
	LNode *s;
	ElemType x;
	LinkList L = (LinkList)malloc(sizeof(LNode));
	L->next = NULL;
	scanf("%d", &x);
	while (x != 9999)
	{
		s = (LNode*)malloc(sizeof(LNode));
		s->data = x;
		s->next = L->next;
		L->next = s;
		scanf("%d", &x);
	}
  *list = L;
	return L;
}

void Display(LinkList L) {
	if (L == NULL)
	{
		return;
	}
	LNode *s = L->next;
	while (s != NULL) 
  {
		printf("%d", s->data);
		s = s->next;
	} 
}

void Hello(char *s)
{
	printf("hello %s\n", s);
}

int main()
{
	//Hello("World!\n");
	LinkList list;
	CreateList(&list);
	Display(list);
	return 0;
}
