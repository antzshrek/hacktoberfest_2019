hello_world.o:
	gcc -Wall -g -c -std=gnu99 hello_world.c

exec: hello_world.o
	gcc hello_world.o -o exec

run: exec
	./exec

clean:
	rm -f hello_world.o exec
