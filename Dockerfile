FROM xqdocker/ubuntu-nginx

COPY dist/BudgetApp /data/www
EXPOSE 80
RUN service nginx start
