"""create movies table

Revision ID: 32f02c17390f
Revises: 
Create Date: 2020-07-20 20:58:03.546402

"""
from alembic import op
from sqlalchemy import Column, Integer, String
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32f02c17390f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'movies',
        Column('id',String,primary_key=True),
        Column('title',String,nullable=False),
        Column('year',Integer,nullable=False),
        Column('description',String,nullable=True)
    )


def downgrade():
    op.drop_table('movies')
