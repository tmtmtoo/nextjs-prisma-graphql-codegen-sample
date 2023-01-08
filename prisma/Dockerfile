FROM node:18

WORKDIR /migration

RUN echo " \
    #!/bin/sh \n\
    set -e \n\
    sleep 3 \n\
    prisma migrate dev \
    " > ./migrate.sh \
    && chmod 755 ./migrate.sh \
    && npm install -g prisma

COPY . .

CMD [ "./migrate.sh" ]
