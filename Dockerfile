FROM node:17-alpine

WORKDIR /app

COPY . .

# Remove default yarn
RUN rm -rf $(dirname $(which yarn))/yarn*
# Download latest
RUN rm -rf ~/.yarn

RUN npm install -g yarn

RUN yarn --version
RUN yarn install

CMD ["yarn", "start"]